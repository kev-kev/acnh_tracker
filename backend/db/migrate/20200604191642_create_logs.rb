class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.string :date
      t.integer :user_id
      t.integer :visitor_id

      t.timestamps
    end
  end
end
