import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Buttons from "../UI/Buttons";
import { Link } from "react-router-dom";
import { backendHost } from '../Config';

export const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAnnouncementsList = async () => {
      try {
        const response = await fetch(`http://${backendHost}/announcements/`);
        if (!response.ok) {
          throw new Error("Could not fetch events.");
        } else {
          const resData = await response.json();
          setAnnouncements(resData.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAnnouncementsList();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/announcements/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://${backendHost}/announcements/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the announcement.');
      }

      setAnnouncements((prevAnnouncements) =>
        prevAnnouncements.filter((announcement) => announcement.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Announcements Management Page</h1>
      <Link
        to="/announcements/new"
        style={{ textDecoration: "none" }}
        >
        <Buttons text="Add Announcement" />
      </Link>
      {announcements.map((announcement) => {
        return (
          <Card border="primary" text="dark" style={{ width: "99%" }} className="m-2" key={announcement.id}>
            <Card.Body>
              <Card.Title>{announcement.title}</Card.Title>
              <Card.Text>{announcement.description}</Card.Text>
              <Button variant="primary" style={{ margin: "1rem" }} onClick={() => handleUpdate(announcement.id)}>
                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(announcement.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};