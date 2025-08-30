import {posts} from '../data/post.js';
import {stories} from '../data/story.js';

let postsHtml = '';

posts.forEach((post) => {
  postsHtml +=
    `<div class="post-container">
      <div class="profile-info">
        <div class="s1">
          <div class="profile-pic">
            <img src="${post.profileImage}" alt="" />
            <span></span>
          </div>
          <div class="profile-name">
            <div>
              ${post.profileName} • <span style="color: var(--color1);">Follow</span>
            </div>
            <div class="time">16h</div>
          </div>
        </div>
        <div class="s2">
          <img src="icons/more.svg" alt="" />
          <img src="icons/add1.svg" alt="" style="transform: rotate(45deg);"/>
        </div>
      </div>
      <div class="post-text">
        ${post.postCaption}
      </div>
      <div class="post-image">
        <img src="${post.postImage}" alt="Silvia">
      </div>
      <div class="post-reaction">
        <div>
          <span>
            <img src="icons/facebook-like-logo-svgrepo-com.svg" alt="" />
            <img src="icons/facebook-love-logo-svgrepo-com.svg" alt="" />
            </span>
          <span>${post.postRating.likeCounts}</span>
        </div>
        <div class="">
          <span>${post.postRating.postComment} comments</span>
        </div>
      </div>
      <div class="reaction-btn">
        <div>
          <img src="icons/facebook-like-svgrepo-com.svg" alt="lioe button" /> 
          <span>${post.postRating.likeCounts}</span>
        </div>
        <div>
          <img src="icons/comment-1-svgrepo-com.svg" alt="comment button" /> <span>${post.postRating.postComment}</span>
        </div>
        <div>
          <img src="icons/link-svgrepo-com.svg" alt="link button" />
        </div>
        <div>
          <img src="icons/share-svgrepo-com.svg" alt="share button" /> <span>${post.postRating.postShareCount}</span>
        </div>
      </div>
    </div>
  `
});

document.querySelector('.js-post-section').innerHTML = postsHtml;

let storyHtml = '';

stories.forEach((story) => {
  storyHtml +=
    `<div class="story">
        <img src="${story.storyImage}" alt="" />
        <span class="story-no">${story.storyNo}</span>
        <span class="story-name">${story.storyName}</span>
      </div>
  `
});

document.querySelector('.js-stories-container').innerHTML = storyHtml;