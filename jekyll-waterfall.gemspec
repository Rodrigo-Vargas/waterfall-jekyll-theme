# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-waterfall"
  spec.version       = "0.10.0"
  spec.authors       = ["Rodrigo-Vargas"]
  spec.email         = ["rodrigovargas123@gmail.com"]

  spec.summary       = "A minimal Jekyll Theme"
  spec.homepage      = "https://rodrigovargas.com.br"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
