# companyInfo

Install python3
Install nodeJs >= 6.9.10
npm install -g @angular/cli@1.7
install virtualenv

# git clone <repo>
  cd companyInfo
  virtualenv -p python3 .venv
  source .venv/bin/activate

  pip install django
  pip install djangorestframework
  pip install djangorestframework-jwt
  
  cd company 
  npm install
  ng build
  
  cd ..
  python manage runserver 0.0.0.0:8000
  
  Now Can access in browser
  
  http://127.0.0.1:8000
  

