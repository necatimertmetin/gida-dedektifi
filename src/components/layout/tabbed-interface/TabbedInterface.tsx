import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";
import { categories } from "./components/categoriesData";
import { BlogPost } from "../../../pages/blog-post/BlogPost";

export const TabbedInterface: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Paper sx={{ margin: 5, borderRadius: 2 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category.label} />
          ))}
        </Tabs>
      </Paper>

      {categories.map((category, index) => (
        <Paper key={index} sx={{ margin: 5, borderRadius: 2 }}>
          <TabPanel value={selectedTab} index={index}>
            <BlogPost />
          </TabPanel>
        </Paper>
      ))}
    </Box>
  );
};

const TabPanel: React.FC<{
  value: number;
  index: number;
  children: React.ReactNode;
}> = ({ value, index, children }) => {
  return value === index ? (
    <Box sx={{ p: 3 }}>
      <Typography>{children}</Typography>
    </Box>
  ) : null;
};
