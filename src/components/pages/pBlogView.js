import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../common/Navbar/Navbar';
import Newsletter from '../common/newsletter';
import Footer from '../common/Footer/Footer';
import posts from '../services/posts'; // Importe o array de posts do Blogview

const PBlogView = () => {
  const { postId } = useParams();

  // Encontre o post correspondente com base no ID do parâmetro
  const post = posts.find((post) => post.id === parseInt(postId, 10));

  if (!post) {
    return <div>Post não encontrado!</div>;
  }

  return (
    <div>
      <Navbar />

      <div id="main-card" className="card">
        <div className="card-body">
          <h4 className="paragraph-title">{post.title}</h4>
          <p className="card-text">{post.content}</p>
          <p className="card-text">{post.updated}</p>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default PBlogView;
