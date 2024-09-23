# nodejs-better-sqlite3
A node.js app with express and better-sqlite3 to create sql database with CRUD opertaions.

## Initial setup
```bash
npm init
```

- Install Express.js to create server.
```bash
npm install express
```

## Install better-sqlite3
```bash
npm install better-sqlite3 --save
```

Since better-sqlite3 requires native compilation, following are the tools required.

⚡️ **Install Python:** Go to the Python [downloads page](https://www.python.org/downloads/), and download the latest version of Python 3.x.
⚡️ **Install Visual Studio Build Tools:**
- Download and install the [Visual Studio](https://visualstudio.microsoft.com/visual-cpp-build-tools/) 2022 Build Tools.
- During installation, select the "Desktop development with C++" workload. This will install the required C++ compilers and tools needed for building native Node.js modules.
Make sure to also install MSVC v142 - VS 2019 C++ x64/x86 build tools during the Visual Studio Build Tools setup process.
⚡️ **Install Node-Gyp Globally:**
`node-gyp` is the tool that compiles native modules, and you might need to install or update it globally:
```bash
npm install -g node-gyp
```

⚡️ **Set Up Python for Node-Gyp**
If you've installed Python 3.x but node-gyp is looking for Python 2.x, you'll need to tell it to use Python 3:
```bash
npm config set python python3
```

Or, if python3 is not recognized:
```bash
npm config set python "C:\path\to\python.exe"
```

## 🔗 Links
[better-sqlite3](https://github.com/WiseLibs/better-sqlite3/blob/HEAD/docs/troubleshooting.md)

[Api documentation](https://github.com/WiseLibs/better-sqlite3/blob/f01e0e42da4b8ba509961e772132e69ef5aa11c0/docs/api.md)