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

  def edit
    @log = Log.find(params[:id])
  end

  def update
    @log = Log.find(params[:id])
    @log.update(date: params[:date])
    # update associated visitors here, but how....
  end

end
