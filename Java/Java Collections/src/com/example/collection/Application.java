package com.example.collection;

import java.util.Collection;
import java.util.List;
import com.example.utils.Room;

public class Application {

	public static void main(String[] args) {
		Room cambridge = new Room("Cambridge", "Premiere", 4, 175.00);
		Room manchester = new Room("Manchester", "Suite", 5, 250.00);
		Room picadilly = new Room("picadilly", "Premiere", 4, 125.00);

		Collection<Room> rooms = List.of(cambridge, manchester, picadilly);
		double total = getPotentioalRevenue(rooms);
		System.out.println("The total is: " + total);
	}

	private static double getPotentioalRevenue(Collection<Room> rooms) {
		return rooms.stream()
				.mapToDouble(r -> r.getRate())  // Transforms each Room object in the stream into its rate, which is a double.
				.sum();
	}

}
