import React, { Suspense } from "react";
import Loading from "../component/Loading";
// import FacebookPost from "../component/FacebookPost";

const FacebookPost = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../component/FacebookPost"));
      }, 5000);
    })
);

const PostPage = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <FacebookPost />
      </Suspense>
    </div>
  );
};

export default PostPage;
