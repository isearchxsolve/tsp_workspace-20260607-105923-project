import numpy as np

def calculate_distance(point1, point2):
    return np.linalg.norm(np.array(point1) - np.array(point2))