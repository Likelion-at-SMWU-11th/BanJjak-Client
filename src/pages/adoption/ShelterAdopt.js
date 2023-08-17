import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdoptList from "../../components/AdoptList";

function ShelterAdopt(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //console.log(props.selectedSpecies);
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        let url = "http://127.0.0.1:8000/posts/";
        if (props.selectedSpecies) {
          url = `http://127.0.0.1:8000/posts/?animal_type=${props.selectedSpecies}`;
        }
        const response = await axios.get(url, {
          headers: { Authorization: `Token ${token}` },
        });
        setPosts(response.data); // Update the posts state with fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [props.selectedSpecies]);

  const PostComponent = ({ post }) => {
    return (
      <div>
        <Link to="/Guidance/Agreement">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/floatingread.png"}
            id="floatingread"
            alt="floatingread"
          />
        </Link>
        <AdoptList />
        <AdoptList />
        <AdoptList />
        <AdoptList />
        <AdoptList />
        <div>
          {posts.results ? (
            posts.results.map((post) => (
              <PostComponent key={post.id} post={post} />
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    );
  };
}

export default ShelterAdopt;