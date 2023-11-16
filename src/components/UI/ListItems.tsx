"use client";

import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Dashboard } from "@mui/icons-material";
import Link from "next/link";

const mainListItems = () => {
  return (
    <React.Fragment>
      <Link href={`/dashboard`}>
        <ListItemButton
          sx={{
            padding: {
              xs: "8px",
              md: "8px 16px",
            },
          }}
          style={{ borderBottom: `1px solid #259FD9` }}
        >
          <ListItemIcon>
            <Dashboard className="text-light_primary dark:text-dark_primary" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "15px" }}
            primary="Dashboard"
          />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default mainListItems;
