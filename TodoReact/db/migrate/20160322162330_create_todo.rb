class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :title, null: false
      t.text :body, null: false
      t.boolean :done, null: false

			t.timestamps
    end


  end
end
