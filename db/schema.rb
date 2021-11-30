# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_24_184955) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "medication_notes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "user_medication_id", null: false
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_medication_notes_on_user_id"
    t.index ["user_medication_id"], name: "index_medication_notes_on_user_medication_id"
  end

  create_table "medications", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "frequency"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "takens", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "user_medication_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_takens_on_user_id"
    t.index ["user_medication_id"], name: "index_takens_on_user_medication_id"
  end

  create_table "user_medications", force: :cascade do |t|
    t.integer "dose"
    t.bigint "user_id", null: false
    t.bigint "medication_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["medication_id"], name: "index_user_medications_on_medication_id"
    t.index ["user_id"], name: "index_user_medications_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.integer "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "medication_notes", "user_medications"
  add_foreign_key "medication_notes", "users"
  add_foreign_key "takens", "user_medications"
  add_foreign_key "takens", "users"
  add_foreign_key "user_medications", "medications"
  add_foreign_key "user_medications", "users"
end
