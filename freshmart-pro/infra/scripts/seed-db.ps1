$ErrorActionPreference = "Stop"
Get-Content "$PSScriptRoot\..\..\database\seed\roles.sql"
Get-Content "$PSScriptRoot\..\..\database\seed\categories.sql"
Get-Content "$PSScriptRoot\..\..\database\seed\products.sql"
