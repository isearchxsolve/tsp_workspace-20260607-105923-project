import numpy as np
from tsp import travelling_salesman

def main():
    points = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
    path = travelling_salesman(points)
    print(path)

if __name__ == '__main__':
    main()