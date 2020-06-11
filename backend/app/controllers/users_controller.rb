class UsersController < ApplicationController
  before_action :authorized, only: [:auto_login]

  def profile
    render json: {user: UserSerializer.new(current_user)}, status: :accepted
  end 

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: {user: UserSerializer.new(@user), jwt: @token}, status: :created
    else
      render json: {error: 'Invalid username or password'}, satus: :not_acceptable
    end
  end

  def auto_login
    render json: @user
  end

  private
  def user_params
    params.permit(:user, :username, :password, :password_confirmation, :island_name, :profile_pic)
  end

end