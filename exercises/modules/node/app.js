const fns = require("./api");

const showPostsForCurrentUser = (userId, cb) => {
  fns.getPostsForUser(userId, (posts) => {
    const postTemplates = posts.map((post) => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`;
    });
    cb(postTemplates);
  });
};

const showUserProfile = (userId, cb) => {
  fns.getUserById(userId, (user) => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `;
    cb(user);
  });
};

const app = {
  showPostsForCurrentUser,
  showUserProfile,
};

module.exports = app;
