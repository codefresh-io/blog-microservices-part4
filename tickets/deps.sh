mkdir registry_micro;

cd registry_micro;
git init;git remote add -f origin https://github.com/codefresh-io/blog-microservices-part4.git
git pull --depth=1 origin microservices_split;
cd ..;
npm i ./registry_micro/registry
npm i ./registry_micro/logger
