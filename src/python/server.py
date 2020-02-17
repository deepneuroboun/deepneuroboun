import zmq
import deeplabcut
import os


config_path = os.path.expanduser("~/projects/DeepLabCut/examples/Reaching-Mackenzie-2018-08-30/config.yaml")

def new_project():
	deeplabcut.label_frames(config_path)

	return "Hello World!"


fDict = {
		"project_name": new_project
		}

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:3001")

message = socket.recv_json()
print("Received request: %s" % message)

socket.send_json(fDict[message]())
