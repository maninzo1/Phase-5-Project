class CreateMedicationNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :medication_notes do |t|
      t.references :user,  null: false, foreign_key: true
      t.references :user_medication,  null: false, foreign_key: true 
      t.text :content

      t.timestamps
    end
  end
end
