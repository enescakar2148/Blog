import React from "react";
import "../css/home.css";
import testImage from "../Assets/post-image.jpg";

class Home extends React.Component {
    render() {
        const data = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 1,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            }
        ]
        return (
            <div className="home-swapper">
                {data.map((post) => (
                    <div className="card-image">
                        <div className="card">
                            <img src={testImage} id="post-image" alt="Post İmage" />
                            <div className="post-content">
                                <h1 id="post-title">İlk Yazı :)</h1>
                                <p id="post-body">It is a long established fact that a reader will be distracted..</p>
                                <p id="post-read-more">Read More...</p>
                                <p id="time-text">21.11.2021</p>

                                {/* <div className="post-icons">
                                    <ul className="post-icons" id="post-icons">
                                        <li className="post-icon" id="like-icon">Like</li>
                                        <li className="post-icon" id="comment-icon">Comment</li>
                                        <li className="post-icon" id="save-icon">Save</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Home;