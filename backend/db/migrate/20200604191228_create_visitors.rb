class CreateVisitors < ActiveRecord::Migration[6.0]
  def change
    create_table :visitors do |t|
      t.string :img
      t.string :name
      t.integer :log_id

      t.timestamps
    end
  end
end
