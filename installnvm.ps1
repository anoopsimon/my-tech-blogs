# PowerShell script to install NVM for Windows

# Define NVM Windows latest version URL
$nvmInstallUrl = "https://github.com/coreybutler/nvm-windows/releases/latest/download/nvm-setup.zip"

# Define the installation path (Change it if you want to install it in a different location)
$installPath = "$HOME\nvm"

# Create the directory if it does not exist
if (!(Test-Path $installPath)) {
    New-Item -ItemType Directory -Force -Path $installPath
}

# Download the NVM setup zip file
$zipFile = "$installPath\nvm-setup.zip"
Invoke-WebRequest -Uri $nvmInstallUrl -OutFile $zipFile

# Extract the zip file
Expand-Archive -LiteralPath $zipFile -DestinationPath $installPath -Force

# Run the installer
Start-Process -FilePath "$installPath\nvm-setup.exe" -Wait

# Remove the downloaded zip file
Remove-Item $zipFile

# Add NVM directory to PATH environment variable
$env:Path += ";$installPath"

# Output a message
Write-Host "NVM for Windows installation is complete. Please restart your PowerShell to use NVM."
