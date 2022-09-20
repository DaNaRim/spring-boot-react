package com.danarim.springBootReact.posts;


import java.util.List;

public interface PostService {

    List<Post> getAllPosts();

    Post createPost(Post post);

    Post updatePost(Post post);

    void deletePost(Long id);
}
