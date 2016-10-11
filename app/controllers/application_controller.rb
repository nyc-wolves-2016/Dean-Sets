class ApplicationController < ActionController::Base

  def current_user
   User.find_by(id: session[:user_id])
  end

  def logged_in?
   !!current_user
  end

  def require_user
   redirect_to root_path unless logged_in?
  end

  def user_logged_in?(user_id) # Ensures a user who is not logged in can view home page
   if logged_in?
     true if current_user.id == user_id
   end
  end
end
