import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        mb={"50px"}
        fontWeight={"bold"}
        sx={{
          fontSize: { lg: "44px", xs: "22px" },
        }}
      >
        Similar <span style={{ color: "#ff2625" }}>Target Muscle</span>{" "}
        exercises
      </Typography>
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        mb={"50px"}
        fontWeight={"bold"}
        mt={"110px"}
        sx={{
          fontSize: { lg: "44px", xs: "22px" },
        }}
      >
        Similar <span style={{ color: "#ff2625" }}>Equipment</span> exercises
      </Typography>
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
