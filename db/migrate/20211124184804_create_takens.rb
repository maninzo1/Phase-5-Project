class CreateTakens < ActiveRecord::Migration[6.1]
  def change
    create_table :takens do |t|
      t.references :user,  null: false, foreign_key: true
      t.references :user_medication,  null: false, foreign_key: true 
 
      t.timestamps
    end
  end
end
