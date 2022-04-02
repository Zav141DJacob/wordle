package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func main() {
	addServer()
}

func addServer() {

	port := ":8002"
	fileServer := http.StripPrefix("/static/", http.FileServer(http.Dir("./static")))
	http.Handle("/static/", fileServer)
	http.HandleFunc("/", test)

	fmt.Println("Listening on port: " + port[1:])
	fmt.Println("http://localhost" + port)
	http.ListenAndServe(port, nil)
}

func test(w http.ResponseWriter, r *http.Request) {

	t, err := template.ParseFiles("./static/index.html")
	if err != nil {
		handleErr(err)
	}

	err = t.Execute(w, "template")
	fmt.Println("thisisatest")
	fmt.Println(r.Method)
}


func handleErr(err error) {
	fmt.Printf("Found error: \n\t%v\n", err.Error())
}