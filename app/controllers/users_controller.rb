class UsersController < ApplicationController
  def login
    if logged_in?
      @user = current_user
      redirect_to @user
    else
      session[:login] = true
      render "login"
    end
  end

  def signin
    @user = User.find_by(email: user_params[:email])

    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      redirect_to @user
    else
      @errors = ["Invalid email or password"]
      render 'login'
    end
  end

  def logout
    require_user
    session.clear
    redirect_to root_path
  end

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      @errors = @user.errors.full_messages
      render 'new'
    end
  end

  def show
    require_user
    @user = current_user
    render "show"
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
end