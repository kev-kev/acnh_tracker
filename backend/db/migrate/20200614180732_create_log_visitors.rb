class CreateLogVisitors < ActiveRecord::Migration[6.0]
  def change
    create_table :log_visitors do |t|
      t.integer :visitor_id
      t.integer :log_id
    end
  end
end
