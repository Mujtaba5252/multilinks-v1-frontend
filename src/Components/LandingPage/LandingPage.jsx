import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate(routes.login);
        }}
      >
        navigate to Login page
      </Button>
    </div>
  );
};

export default LandingPage;
