class CreateMedicationNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :medication_notes do |t|
      t.user :belongs_to
      t.user_medication :belongs_to
      t.text :content

      t.timestamps
    end
  end
end
