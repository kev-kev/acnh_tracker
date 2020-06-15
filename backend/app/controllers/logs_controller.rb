class LogsController < ApplicationController

  # current_user not getting set because no auth header
  # do i get the user some other way? or do i authorize this with the bearer thing..
  def index
    @logs = Log.all
    user_logs = @logs.select{|log| log.user == current_user}
    render json: {logs: user_logs}, status: :ok
  end

  def save
    @user = current_user
    @log = Log.new(date: params[:date], user: @user)
    params[:visitors].each{ |visitor| 
      new_visitor = Visitor.find_by name: visitor
      @log.visitors.push(new_visitor)
    }
    @log.save!
    if @log.valid?
      render json: {}, status: :created
    else
      render json: {error: @log.errors}, status: :not_acceptable
    end
  end

end
