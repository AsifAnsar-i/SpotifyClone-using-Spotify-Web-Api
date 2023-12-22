import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

export const Playlists = () => {
  const [{ token, dispatch }] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.warn(response);
    };
    getPlaylistData();
  }, [token, dispatch]);
  return <div>Playlists</div>;
};
