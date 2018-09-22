server {

	server_name host.movers.com
	listen 80;

	location / {

		proxy_pass http://localhost:3000;

		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header X-Forwarded-Host $remote_addr;

		proxy_pass_request_headers on;

		proxy_buffers 4 256k;
		proxy_buffer_size 128k;
		proxy_busy_buffers_size 256k;
	}
}
server {

	server_name flexmover.movers.com
	listen 80;

	location / {

		proxy_pass http://localhost:3000;

		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header X-Forwarded-Host $remote_addr;

		proxy_pass_request_headers on;

		proxy_buffers 4 256k;
		proxy_buffer_size 128k;
		proxy_busy_buffers_size 256k;
	}
}
server {

	server_name yourmover.movers.com
	listen 80;

	location / {

		proxy_pass http://localhost:3000;

		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header X-Forwarded-Host $remote_addr;

		proxy_pass_request_headers on;

		proxy_buffers 4 256k;
		proxy_buffer_size 128k;
		proxy_busy_buffers_size 256k;
	}
}

