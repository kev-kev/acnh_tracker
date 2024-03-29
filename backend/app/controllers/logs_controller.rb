class LogsController < ApplicationController

  def index
    @logs = Log.all
    user_logs = @logs.select{ |log| log.user == current_user }
    user_logs = user_logs.map{|log| {date: log.date, visitors: log.visitors} }
    if (user_logs.length > 0) 
      render json: {logs: user_logs }, status: :ok
    else 
      render json: {logs: []}, status: :ok
    end
  end

  def save
    user = current_user
    # @log = Log.new(date: params[:date], user: @user)
    log = Log.where(user: user).find_or_create_by(date: params[:date]);
    log_visitors = [];
    params[:visitors].each{ |visitor_name| 
      visitor = Visitor.find_by name: visitor_name
      log_visitors.push(visitor)
    }
    log.visitors = log_visitors;
    log.save!
    if log.valid?
      render json: {}, status: :created
    else
      render json: {error: log.errors}, status: :not_acceptable
    end
  end

  def delete
    user = current_user
    log = Log.where(user: user).find_by(date: params[:date]);
    log.delete
    user_logs = Log.all.select{ |log| log.user == user }
    user_logs = user_logs.map{|log| {date: log.date, visitors: log.visitors} }
    render json: {logs: user_logs}, status: :ok
  end

end
