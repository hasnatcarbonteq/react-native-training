import React, { useRef } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, FlatList, ScrollView, StyleSheet } from 'react-native';

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';


export const HomeScreen = ({navigation})=>{

    return (
        <View style={styles.container}>
				<View style={styles.homebody}>
                	<SectionList
	                    sections={defaultState} 
						renderItem={({item}) => {
						 return <ConcertListItem item={item} navigation={navigation}/> 
						
						}}
                  		renderSectionHeader={({section}) => (
							<View style={styles.sectionHeader}>
								<Text style={styles.sectionHeaderText}>
									{section.title}
								</Text>
							</View>

						)}/>
				</View>
				<View style={styles.homefooter}>
					<Text style={styles.homefooterText}>

						(C)2020 Globoticket

					</Text>
				</View>

		</View>
	)
	
}

const styles = StyleSheet.create({

	container: {

		backgroundColor: "#ffffff",
		flex: 1

	},
	homebody:{

		flex: 15,
		color: "#000000"
	},
	homefooterText:{

		fontSize: 20,
		textAlign: "center",
		color: "white",
		marginBottom: 2

	},
	homefooter: {

		flex: 1,
		alignSelf: "stretch",
		justifyContent: "flex-end",
		borderTopColor: "gray",
		borderTopWidth: StyleSheet.hairlineWidth,
		backgroundColor: "steelblue"

	},

	sectionHeader: {

		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		backgroundColor: 'white',
		borderBottomColor: "steelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		
	},

	sectionHeaderText: {

		fontSize: 32,
		color: "steelblue"

	}

})