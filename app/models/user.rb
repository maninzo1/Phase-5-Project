class User < ApplicationRecord
    has_many :user_medications
    has_many :medications, through: :user_medications
    # has_many :medications_notes 
    # has_many :user_medications, through: :medications_notes
    # has_many :takens
end
