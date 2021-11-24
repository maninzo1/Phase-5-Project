class CreateTakens < ActiveRecord::Migration[6.1]
  def change
    create_table :takens do |t|
      t.user :belongs_to
      t.user_medication :belongs_to

      t.timestamps
    end
  end
end
