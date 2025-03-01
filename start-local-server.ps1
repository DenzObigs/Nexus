# PowerShell script to start a local server for Nexus FinTech website

Write-Host "Starting local server for Nexus FinTech website..." -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow

# Check if Python is installed
$pythonCommand = Get-Command python -ErrorAction SilentlyContinue
if ($pythonCommand) {
    Write-Host "Using Python to start local server..." -ForegroundColor Cyan
    # Start Python HTTP server
    python -m http.server 8000
}
else {
    # If Python is not available, use PowerShell to create a simple HTTP server
    Write-Host "Python not found. Using PowerShell HTTP server..." -ForegroundColor Cyan
    
    # Define the port and directory to serve
    $port = 8000
    $directory = (Get-Location).Path
    
    # Create a simple HTTP listener
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    
    Write-Host "Server running at http://localhost:$port/" -ForegroundColor Green
    
    try {
        while ($listener.IsListening) {
            # Get the HTTP request
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            # Get the requested URL and convert it to a file path
            $requestUrl = $request.Url.LocalPath
            $requestUrl = $requestUrl.TrimStart('/')
            
            # Default to index.html if the root is requested
            if ($requestUrl -eq '') {
                $requestUrl = 'index.html'
            }
            
            $filePath = Join-Path $directory $requestUrl
            
            # Check if the file exists
            if (Test-Path $filePath -PathType Leaf) {
                # Determine the content type based on file extension
                $contentType = "text/plain"
                switch ([System.IO.Path]::GetExtension($filePath)) {
                    ".html" { $contentType = "text/html" }
                    ".css" { $contentType = "text/css" }
                    ".js" { $contentType = "application/javascript" }
                    ".json" { $contentType = "application/json" }
                    ".png" { $contentType = "image/png" }
                    ".jpg" { $contentType = "image/jpeg" }
                    ".gif" { $contentType = "image/gif" }
                    ".svg" { $contentType = "image/svg+xml" }
                }
                
                # Read the file content
                $content = [System.IO.File]::ReadAllBytes($filePath)
                
                # Set response details
                $response.ContentType = $contentType
                $response.ContentLength64 = $content.Length
                $response.StatusCode = 200
                
                # Write the file content to the response
                $output = $response.OutputStream
                $output.Write($content, 0, $content.Length)
                $output.Close()
                
                Write-Host "200 OK: $requestUrl" -ForegroundColor Green
            }
            else {
                # Return 404 if the file is not found
                $response.StatusCode = 404
                $response.Close()
                
                Write-Host "404 Not Found: $requestUrl" -ForegroundColor Red
            }
        }
    }
    finally {
        # Close the listener when done
        $listener.Stop()
        Write-Host "Server stopped" -ForegroundColor Yellow
    }
} 