class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.references :user, foreign_key: true, null: false
      t.integer :sets, default: 0
      t.integer :invalid_sets, default: 0

      t.timestamps(null: false)
    end
  end
end
