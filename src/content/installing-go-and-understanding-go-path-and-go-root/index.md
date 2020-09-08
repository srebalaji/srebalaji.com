---
title: "Installing go and understanding GOPATH and GOROOT"
description: "Installing Go in your system and understanding what is GOPATH and GOROOT"
date: "2020-09-08T20:47:50.518Z"
categories: 
  - go

published: true
---

Hey folks

To start with the series, Let's see how to install Go in your system.

Visit [Go Downloads](https://golang.org/doc/install) and download Go for your respective OS platform.

After installing, you can try
```go
go version
```

# Understanding GOPATH and GOROOT
You can run **```go env ```** to get all the environment variables.

By default, Go will be installed in your home directory. It is also advisable to install it in home directory than other locations.

## GOROOT
**GOROOT** is the location where all the Go language source code is present. This is not our source code but the language itself, compiler and Go tools. This location is automatically set in the installation itself.

## GOPATH
Go assumes the location is at **```$HOME/go```**.

This is the location where our source code lives and all third party packages live. When we run Go, the language searches for the source code in the provided location and executes it. 

It's possible to have multiple GOPATH locations but it's recommanded to have one.

Hope you learned something.

Thank you for reading :)


