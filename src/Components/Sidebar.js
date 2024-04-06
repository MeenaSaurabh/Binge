import { Stack } from "@mui/system";
import React, { useState } from "react";
import "./sidebar.css";
import SidebarComponent from "./SidebarComponent";
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ScienceIcon from "@mui/icons-material/Science";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Sidebar = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Stack
      direction={{ lg: "column", md: "row", sm: "row", xs: "row" }}
      sx={{
        pt: 5,
        backgroundColor: "black",
        overflow: "hidden",
        overflowX: {
          sm: "scroll",
          xs: "scroll",
          lg: "none",
          md: "none",
          xl: "none",
        },
        gap: { lg: 6, md: 4, sm: 6, xs: 6 },
        alignItems: "center",
        flex: { lg: 0.1, sm: 0.1, md: 0.1, xs: 0.1 },
      }}
      className="sidebar"
    >
      <SidebarComponent
        selected={selected}
        icon={<HomeIcon />}
        title={"Home"}
      />
      <SidebarComponent
        selected={selected}
        icon={<MusicNoteIcon />}
        title={"Music"}
      />
      <SidebarComponent
        selected={selected}
        icon={<PodcastsIcon />}
        title={"Podcasts"}
      />
      <SidebarComponent
        selected={selected}
        icon={<SportsBasketballIcon />}
        title={"Sports"}
      />
      <SidebarComponent
        selected={selected}
        icon={<JavascriptIcon />}
        title={"ReactJs"}
      />
      <SidebarComponent
        selected={selected}
        icon={<ScienceIcon />}
        title={"Science"}
      />
      <SidebarComponent
        selected={selected}
        icon={<SportsEsportsIcon />}
        title={"Gaming"}
      />
    </Stack>
  );
};

export default Sidebar;
