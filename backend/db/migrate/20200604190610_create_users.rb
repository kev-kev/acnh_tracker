class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :island_name
      t.string :profile_pic
      t.integer :log_id

      t.timestamps
    end
  end
end
