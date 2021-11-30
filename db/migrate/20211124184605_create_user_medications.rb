class CreateUserMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :user_medications do |t|
      t.integer :dose
      t.references :user, null: false, foreign_key: true
      t.references :medication, null: false, foreign_key: true

      t.timestamps
    end
  end
end
