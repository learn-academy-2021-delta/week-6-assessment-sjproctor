# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) defining a class called BlogPostsController which likely came from a generate command, inhereting from the application controller
class BlogPostsController < ApplicationController
  def index
    # ---2) defining an instance variable holding an Active Record query returning all instances of BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3) defining a instance variable holding an Active Record query finding one item from the BlogPost db by getting an id from the params in the url
    @post = BlogPost.find(params[:id])
  end

  # ---4) defining a method called new that will return a form
  def new
    @post = Post.new
  end

  def create
    # ---5) defining an instance variable to create a new instance of BlogPost calling the blog_post_params strong params method
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) defining a method that calls a restful route that displays a form for updating info
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) instance variable of one item in the db modifying a record and being passed blog_post_params which is the strong param method call
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) routing to the show page
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Everything below this line cannot be accessed outside the scope of this class
  private
  def blog_post_params
    # ---10) User is only allowed to update the title and content columns in the blog_post table
    params.require(:blog_post).permit(:title, :content)
  end
end
