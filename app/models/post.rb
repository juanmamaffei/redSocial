class Post < ApplicationRecord
  belongs_to :user

  validates :markdown_content, presence: true, length: {minimum: 5, maximum: 500}
end
