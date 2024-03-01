package com.github.mohajel.IE.CA2.handlers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "GetHome", urlPatterns = { "/" })
public class GetHome extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Set the content type of the response to "text/html"
        response.setContentType("text/html");

        // Create or retrieve the data you want to pass to the JSP file
        String message = "Hello from the servlet!";

        // Set the data as an attribute in the request object
        request.setAttribute("message", message);

        // Get the RequestDispatcher for the JSP file
        RequestDispatcher dispatcher = request.getRequestDispatcher("./templates/sth.jsp");

        // Forward the request and response objects to the JSP file
        dispatcher.forward(request, response);

    }
}