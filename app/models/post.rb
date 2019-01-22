class Post < ApplicationRecord
  belongs_to :user
  after_create :enviar_a_websocket
  validates :markdown_content, presence: true, length: {minimum: 5, maximum: 500}

  private
    def enviar_a_websocket
      usuario = User.find_by(id: user_id)
      ActionCable.server.broadcast("posts", html_content: html_content, user_id: usuario.id, email: usuario.email, data: ver_json)
    end
    def ver_json
      ApplicationController.renderer.render(partial: "posts/post.json.jbuilder", locals:{post: self})
    end
end
